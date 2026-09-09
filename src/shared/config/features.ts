/**
 * Каталог фичей appmetrica-ui.
 * `id` совпадает с кодом фичи в админке управления доступом.
 */
export const FEATURES = {
    funnelReportAccess: {
        id: 'funnel_report_access',
        title: 'Доступ к новому отчету воронок',
        description:
            'Открывает новый UI отчета воронок. Без фичи сохраняется текущее поведение — BEM-версия отчета.',
    },
} as const;

export type FeatureId = (typeof FEATURES)[keyof typeof FEATURES]['id'];

export const DEFAULT_FEATURES: Record<FeatureId, boolean> = {
    funnel_report_access: false,
};
