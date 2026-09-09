export const messages = {
    ru: {
        appName: 'AppMetrica',
        navAudience: 'Аудитория',
        navEvents: 'События',
        navFunnels: 'Воронки',
        navRetention: 'Удержание',
        featureToggleLabel: 'Доступ к новому отчету воронок',
        funnelEmptyTitle:
            'Воронки помогут найти точки роста вашего бизнеса и повысить конверсию',
        funnelEmptyCreate: 'Создать воронку',
        funnelCreateDialogTitle: 'Новая воронка',
        funnelCreateDialogBody:
            'Форма создания воронки будет добавлена в следующих задачах.',
        funnelCreateDialogClose: 'Закрыть',
        funnelIllustrationAlt: 'Воронка',
        bemReportTitle: 'Воронки',
        bemReportHint: 'Текущая BEM-версия отчета',
        bemReportEmpty: 'Выберите воронку или создайте новую в старом интерфейсе.',
        dashboardTitle: 'Обзор',
        funnelWidgetTitle: 'Воронки',
        funnelWidgetStub: 'Добавьте виджет воронки, чтобы следить за конверсией',
    },
} as const;

export type Locale = keyof typeof messages;
export type MessageKey = keyof (typeof messages)['ru'];

const locale: Locale = 'ru';

export function t(key: MessageKey): string {
    return messages[locale][key];
}
