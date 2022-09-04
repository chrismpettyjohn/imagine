import React, {useEffect} from 'react';
import {WordFilterBannableStatus, WordFilterStrictStatus, WordFilterWire} from '@imagine-cms/types';
import {useFetchWordFilter} from '@imagine-cms/web';
import {DataTable} from '../../components/data-table/DataTable';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function WordFilterSettingsScreen() {
  const {runQuery, data, loading} = useFetchWordFilter();

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Word Filter</h4>
            <div className="table-responsive">
              <LoadingOverlay loading={loading}>
                <DataTable<WordFilterWire>
                  columns={[
                    {
                      header: 'Word',
                      render: wordFilter => wordFilter.word,
                    },
                    {
                      header: 'Replacement',
                      render: wordFilter => wordFilter.replacement,
                    },
                    {
                      header: 'Tags',
                      render: wordFilter => (
                        <>
                          {
                            wordFilter.strict === WordFilterStrictStatus.Strict && (
                              <span className="badge badge-warning mr-2">Strict</span>
                            )
                          }
                          {
                            wordFilter.bannable === WordFilterBannableStatus.Bannable && (
                              <span className="badge badge-danger">Bannable</span>
                            )
                          }
                        </>
                      ),
                    },
                    {
                      header: 'Added By',
                      render: wordFilter => wordFilter.addedby,
                    },
                    {
                      header: 'Tools',
                      render: wordFilter => (
                        <>
                          <button className="btn btn-primary mr-2">
                            <i className="fas fa-pencil" />
                          </button>
                          <button className="btn btn-danger">
                            <i className="fas fa-trash" />
                          </button>
                        </>
                      )

                    }
                  ]}
                  data={data?.wordFilters}
                />
              </LoadingOverlay>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
