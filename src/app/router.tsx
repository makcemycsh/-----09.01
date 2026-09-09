import {Navigate, Route, Routes} from 'react-router-dom';

import {FEATURES} from '@/shared/config/features';
import {ROUTES} from '@/shared/config/routes';
import {useFeature} from '@/shared/lib/features';
import {BemFunnelReportPage} from '@/pages/bem-funnel-report';
import {DashboardPage} from '@/pages/dashboard';
import {FunnelReportPage} from '@/pages/funnel-report';

export function FunnelReportGate() {
    const hasNewFunnelReport = useFeature(FEATURES.funnelReportAccess.id);

    return hasNewFunnelReport ? <FunnelReportPage /> : <BemFunnelReportPage />;
}

export function AppRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.dashboard} element={<DashboardPage />} />
            <Route path={ROUTES.funnelReport} element={<FunnelReportGate />} />
            <Route path="*" element={<Navigate to={ROUTES.dashboard} replace />} />
        </Routes>
    );
}
