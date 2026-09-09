import {FunnelIllustration} from '@/widgets/funnel-illustration';
import {t} from '@/shared/i18n';

import styles from './FunnelWidgetStub.module.css';

export function FunnelWidgetStub() {
    return (
        <article className={styles.root} data-qa="funnel-widget-stub">
            <h3 className={styles.title}>{t('funnelWidgetTitle')}</h3>
            <div className={styles.body}>
                <FunnelIllustration title={t('funnelIllustrationAlt')} />
                <p className={styles.caption}>{t('funnelWidgetStub')}</p>
            </div>
        </article>
    );
}
