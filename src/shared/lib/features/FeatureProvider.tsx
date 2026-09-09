import {createContext, useCallback, useContext, useMemo, useState, type ReactNode} from 'react';

import {DEFAULT_FEATURES, type FeatureId} from '@/shared/config/features';

const FEATURES_STORAGE_KEY = 'appmetrica.features';

type FeatureMap = Record<FeatureId, boolean>;

interface FeatureContextValue {
    features: FeatureMap;
    hasFeature: (id: FeatureId) => boolean;
    setFeature: (id: FeatureId, enabled: boolean) => void;
}

const FeatureContext = createContext<FeatureContextValue | null>(null);

function readStoredFeatures(): Partial<FeatureMap> {
    if (typeof window === 'undefined') {
        return {};
    }

    try {
        const raw = window.localStorage.getItem(FEATURES_STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Partial<FeatureMap>) : {};
    } catch {
        return {};
    }
}

function persistFeatures(features: FeatureMap) {
    window.localStorage.setItem(FEATURES_STORAGE_KEY, JSON.stringify(features));
}

function readQueryFeatures(): Partial<FeatureMap> {
    if (typeof window === 'undefined') {
        return {};
    }

    const params = new URLSearchParams(window.location.search);
    const enabled = params.getAll('feature');
    const disabled = params.getAll('disableFeature');
    const next: Partial<FeatureMap> = {};

    for (const id of enabled) {
        if (id in DEFAULT_FEATURES) {
            next[id as FeatureId] = true;
        }
    }

    for (const id of disabled) {
        if (id in DEFAULT_FEATURES) {
            next[id as FeatureId] = false;
        }
    }

    return next;
}

interface FeatureProviderProps {
    children: ReactNode;
    initialFeatures?: Partial<FeatureMap>;
}

export function FeatureProvider({children, initialFeatures}: FeatureProviderProps) {
    const [features, setFeatures] = useState<FeatureMap>(() => ({
        ...DEFAULT_FEATURES,
        ...readStoredFeatures(),
        ...readQueryFeatures(),
        ...initialFeatures,
    }));

    const setFeature = useCallback((id: FeatureId, enabled: boolean) => {
        setFeatures((current) => {
            const next = {...current, [id]: enabled};
            persistFeatures(next);
            return next;
        });
    }, []);

    const value = useMemo<FeatureContextValue>(
        () => ({
            features,
            hasFeature: (id) => Boolean(features[id]),
            setFeature,
        }),
        [features, setFeature],
    );

    return <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>;
}

export function useFeatures(): FeatureContextValue {
    const context = useContext(FeatureContext);

    if (!context) {
        throw new Error('useFeatures must be used within FeatureProvider');
    }

    return context;
}

export function useFeature(id: FeatureId): boolean {
    return useFeatures().hasFeature(id);
}
