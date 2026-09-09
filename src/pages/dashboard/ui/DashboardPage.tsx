import {FunnelWidgetStub} from '@/widgets/funnel-widget-stub';
import {t} from '@/shared/i18n';

import styles from './DashboardPage.module.css';

export function DashboardPage() {
    return (
        <section className={styles.page} data-qa="dashboard-page">
            <h1 className={styles.title}>{t('dashboardTitle')}</h1>
            <div className={styles.grid}>
                <FunnelWidgetStub />
            </div>
        </section>
    );
}
