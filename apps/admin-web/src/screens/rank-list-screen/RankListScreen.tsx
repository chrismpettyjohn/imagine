import DayJS from 'dayjs';
import {RankWire} from '@imagine-cms/types';
import React, {useContext, useEffect} from 'react';
import {EditRankModal} from './rank-edit-modal/RankEditModal';
import {configContext, useRankFetchAll} from '@imagine-cms/web';
import {DataTable} from '../../components/data-table/DataTable';
import {RankCreateModal} from './rank-create-modal/RankCreateModal';
import {DeleteRankModal} from './rank-delete-button/RankDeleteButton';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function RankListScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading} = useRankFetchAll();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h4 className="card-title">Ranks</h4>
                </div>
                <div className="col-6 text-right">
                  <RankCreateModal onCreate={() => console.log('woo')} />
                </div>
              </div>
              <div className="table-responsive">
                <LoadingOverlay loading={loading}>
                  <DataTable<RankWire>
                    columns={[
                      {
                        header: '',
                        render: rank => <img src={`${config!.groupBadgeURL!}/${rank.badgeCode}.png`} loading="lazy" />,
                      },
                      {
                        header: 'Rank',
                        render: rank => rank.name,
                      },
                      {
                        header: 'Tools',
                        render: rank => (
                          <>
                            <span className="mr-2">
                              <EditRankModal rank={rank} onUpdate={updatedRank => console.log(updatedRank)} />
                            </span>
                            <DeleteRankModal rank={rank} onDelete={() => console.log('deleted')} />
                          </>
                        )

                      }
                    ]}
                    data={data?.ranks}
                  />
                </LoadingOverlay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
