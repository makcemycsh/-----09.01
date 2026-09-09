import type {ReactNode} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Switch} from '@gravity-ui/uikit';

import {FEATURES} from '@/shared/config/features';
import {ROUTES} from '@/shared/config/routes';
import {useFeatures} from '@/shared/lib/features';
import {t} from '@/shared/i18n';

import styles from './AppLayout.module.css';

interface AppLayoutProps {
    children: ReactNode;
}

const NAV_ITEMS = [
    {to: ROUTES.dashboard, labelKey: 'dashboardTitle' as const, disabled: false, end: true},
    {to: ROUTES.dashboard, labelKey: 'navAudience' as const, disabled: true, end: true},
    {to: ROUTES.dashboard, labelKey: 'navEvents' as const, disabled: true, end: true},
    {to: ROUTES.funnelReport, labelKey: 'navFunnels' as const, disabled: false, end: false},
    {to: ROUTES.dashboard, labelKey: 'navRetention' as const, disabled: true, end: true},
];

export function AppLayout({children}: AppLayoutProps) {
    const {hasFeature, setFeature} = useFeatures();
    const funnelReportAccess = hasFeature(FEATURES.FunnelReportAccess.id);

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <Link to={ROUTES.dashboard} className={styles.logo}>
                    {t('appName')}
                </Link>
                <label className={styles.featureToggle}>
                    <Switch
                        size="m"
                        checked={funnelReportAccess}
                        onUpdate={(checked) =>
                            setFeature(FEATURES.FunnelReportAccess.id, checked)
                        }
                    />
                    <span>{t('featureToggleLabel')}</span>
                </label>
            </header>
            <div className={styles.body}>
                <nav className={styles.sidebar} aria-label="Отчеты">
                    {NAV_ITEMS.map((item) =>
                        item.disabled ? (
                            <span
                                key={item.labelKey}
                                className={[styles.navItem, styles.navItemDisabled].join(' ')}
                            >
                                {t(item.labelKey)}
                            </span>
                        ) : (
                            <NavLink
                                key={item.labelKey}
                                to={item.to}
                                end={item.end}
                                className={({isActive}) =>
                                    [styles.navItem, isActive ? styles.navItemActive : '']
                                        .filter(Boolean)
                                        .join(' ')
                                }
                            >
                                {t(item.labelKey)}
                            </NavLink>
                        ),
                    )}
                </nav>
                <main className={styles.content}>{children}</main>
            </div>
        </div>
    );
}
