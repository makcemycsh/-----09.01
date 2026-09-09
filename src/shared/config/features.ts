/**
 * Каталог фичей appmetrica-ui.
 * Идентификаторы и названия совпадают с админкой управления доступом.
 */
export const FEATURES = {
    FunnelReportAccess: {
        id: 'FunnelReportAccess',
        title: 'Доступ к новому отчету воронок',
        description:
            'Открывает новый UI отчета воронок. Без фичи сохраняется текущее поведение — BEM-версия отчета.',
    },
} as const;

export type FeatureId = (typeof FEATURES)[keyof typeof FEATURES]['id'];

export const DEFAULT_FEATURES: Record<FeatureId, boolean> = {
    FunnelReportAccess: false,
};
