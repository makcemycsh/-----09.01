import {describe, expect, it} from 'vitest';

import {DEFAULT_FEATURES, FEATURES} from './features';

describe('features catalog', () => {
    it('registers the admin funnel report feature as funnel_report_access', () => {
        expect(FEATURES.funnelReportAccess.id).toBe('funnel_report_access');
        expect(FEATURES.funnelReportAccess.title).toBe('Доступ к новому отчету воронок');
        expect(DEFAULT_FEATURES.funnel_report_access).toBe(false);
    });
});
