import {Button, Select} from '@gravity-ui/uikit';

import {t} from '@/shared/i18n';

import styles from './BemFunnelReportPage.module.css';

export function BemFunnelReportPage() {
    return (
        <section className={styles.page} data-qa="bem-funnel-report">
            <header className={styles.header}>
                <h1 className={styles.title}>{t('bemReportTitle')}</h1>
                <p className={styles.hint}>{t('bemReportHint')}</p>
            </header>
            <div className={styles.toolbar}>
                <Select
                    disabled
                    placeholder="Выберите воронку"
                    options={[]}
                    className={styles.select}
                />
                <Button view="outlined">Создать воронку</Button>
            </div>
            <div className={styles.body}>{t('bemReportEmpty')}</div>
        </section>
    );
}
