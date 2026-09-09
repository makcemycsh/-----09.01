export interface Funnel {
    id: string;
    name: string;
}

/**
 * Список воронок пока всегда пустой — METR-75473 покрывает только промо-состояние.
 */
export function useFunnels(): {funnels: Funnel[]} {
    return {funnels: []};
}
