import {PlaceholderContainer} from '@gravity-ui/uikit';

import {t} from '@/shared/i18n';
import {FunnelIllustration} from '@/widgets/funnel-illustration';

import styles from './FunnelEmptyPromo.module.css';

interface FunnelEmptyPromoProps {
    onCreate: () => void;
}

export function FunnelEmptyPromo({onCreate}: FunnelEmptyPromoProps) {
    return (
        <div className={styles.root} data-qa="funnel-report-empty-promo">
            <PlaceholderContainer
                size="promo"
                direction="column"
                align="center"
                maxWidth={520}
                title={t('funnelEmptyTitle')}
                image={<FunnelIllustration title={t('funnelIllustrationAlt')} />}
                actions={[
                    {
                        text: t('funnelEmptyCreate'),
                        view: 'action',
                        size: 'l',
                        onClick: onCreate,
                    },
                ]}
            />
        </div>
    );
}
