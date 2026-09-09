import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';
import {ThemeProvider} from '@gravity-ui/uikit';
import {describe, expect, it} from 'vitest';

import {AppLayout} from '@/app/layout/AppLayout';
import {FunnelReportGate} from '@/app/router';
import {FEATURES} from '@/shared/config/features';
import {ROUTES} from '@/shared/config/routes';
import {FeatureProvider} from '@/shared/lib/features';
import {t} from '@/shared/i18n';

function renderFunnelReport(enabled: boolean) {
    return render(
        <ThemeProvider theme="light">
            <FeatureProvider initialFeatures={{[FEATURES.FunnelReportAccess.id]: enabled}}>
                <MemoryRouter initialEntries={[ROUTES.funnelReport]}>
                    <AppLayout>
                        <FunnelReportGate />
                    </AppLayout>
                </MemoryRouter>
            </FeatureProvider>
        </ThemeProvider>,
    );
}

describe('FunnelReportAccess', () => {
    it('opens the BEM funnel report when the feature is disabled', () => {
        renderFunnelReport(false);

        expect(screen.getByTestId('bem-funnel-report')).toBeInTheDocument();
        expect(screen.getByText(t('bemReportHint'))).toBeInTheDocument();
        expect(screen.queryByTestId('funnel-report-empty-promo')).not.toBeInTheDocument();
    });

    it('opens the new funnel report promo when the feature is enabled', () => {
        renderFunnelReport(true);

        expect(screen.getByTestId('funnel-report-empty-promo')).toBeInTheDocument();
        expect(screen.getByText(t('funnelEmptyTitle'))).toBeInTheDocument();
        expect(screen.getByRole('button', {name: t('funnelEmptyCreate')})).toBeInTheDocument();
        expect(screen.queryByTestId('bem-funnel-report')).not.toBeInTheDocument();
    });

    it('switches from BEM to the new report after enabling the feature', async () => {
        const user = userEvent.setup();
        renderFunnelReport(false);

        expect(screen.getByTestId('bem-funnel-report')).toBeInTheDocument();

        await user.click(screen.getByRole('switch'));

        expect(screen.getByTestId('funnel-report-empty-promo')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: t('funnelEmptyCreate')})).toBeInTheDocument();
    });
});
