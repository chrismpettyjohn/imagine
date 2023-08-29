import React, { useEffect } from 'react';
import { WordFilterWire } from '@imagine-cms/types';
import { useFetchWordFilter } from '@imagine-cms/web';
import { DataTable } from '../../components/data-table/DataTable';
import { LoadingOverlay } from '../../components/loading-overlay/LoadingOverlay';
import { EditWordFilterModal } from './edit-word-filter-modal/EditWordFilterModal';
import { CreateWordFilterModal } from './create-word-filter-modal/CreateWordFilterModal';
import { DeleteWordFilterModal } from './delete-word-filter-modal/DeleteWordFilterModal';

export function WordFilterSettingsScreen() {
  const { runQuery, data, loading } = useFetchWordFilter();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h4 className="card-title">Word Filter</h4>
              </div>
              <div className="col-6 text-right">
                <CreateWordFilterModal />
              </div>
            </div>
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
                      header: 'Tools',
                      render: wordFilter => (
                        <>
                          <span className="mr-2">
                            <EditWordFilterModal wordFilter={wordFilter} onSave={() => console.log('woo')} />
                          </span>
                          <DeleteWordFilterModal wordFilter={wordFilter} onDelete={() => console.log('trashed')} />
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
