import {useState} from 'react';
import {Dialog} from '@gravity-ui/uikit';

import {t} from '@/shared/i18n';

import {FunnelEmptyPromo} from './FunnelEmptyPromo';
import {useFunnels} from '../model/useFunnels';

import styles from './FunnelReportPage.module.css';

export function FunnelReportPage() {
    const {funnels} = useFunnels();
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    return (
        <section className={styles.page} data-qa="funnel-report-page">
            {funnels.length === 0 ? (
                <FunnelEmptyPromo onCreate={() => setIsCreateOpen(true)} />
            ) : null}

            {isCreateOpen ? (
                <Dialog open onClose={() => setIsCreateOpen(false)}>
                    <Dialog.Header caption={t('funnelCreateDialogTitle')} />
                    <Dialog.Body>{t('funnelCreateDialogBody')}</Dialog.Body>
                    <Dialog.Footer
                        textButtonCancel={t('funnelCreateDialogClose')}
                        onClickButtonCancel={() => setIsCreateOpen(false)}
                    />
                </Dialog>
            ) : null}
        </section>
    );
}
