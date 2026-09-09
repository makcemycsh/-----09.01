import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ThemeProvider} from '@gravity-ui/uikit';
import {describe, expect, it} from 'vitest';

import {FunnelReportPage} from './FunnelReportPage';
import {t} from '@/shared/i18n';

describe('FunnelReportPage', () => {
    it('renders empty promo with create action when there are no funnels', async () => {
        const user = userEvent.setup();

        render(
            <ThemeProvider theme="light">
                <FunnelReportPage />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('funnel-report-empty-promo')).toBeInTheDocument();
        expect(screen.getByText(t('funnelEmptyTitle'))).toBeInTheDocument();
        expect(screen.getByRole('img', {name: t('funnelIllustrationAlt')})).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: t('funnelEmptyCreate')}));

        expect(screen.getByText(t('funnelCreateDialogTitle'))).toBeInTheDocument();
    });
});
