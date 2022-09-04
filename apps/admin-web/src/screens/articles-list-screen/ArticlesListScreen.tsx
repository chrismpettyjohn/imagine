import DayJS from 'dayjs';
import React, {useContext, useEffect} from 'react';
import {ArticleWire} from '@imagine-cms/types';
import {DataTable} from '../../components/data-table/DataTable';
import {configContext, useFetchArticles} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function ArticlesListScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading} = useFetchArticles();

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Articles</h4>
              <div className="table-responsive">
                <LoadingOverlay loading={loading}>
                  <DataTable<ArticleWire>
                    columns={[
                      {
                        header: '',
                        render: article => <img src={article.imageURL} loading="lazy" style={{borderRadius: 0, width: 200, height: 100}} />,
                      },
                      {
                        header: 'Article',
                        render: article => article.name,
                      },
                      {
                        header: 'Created At',
                        render: article => DayJS(article.createdAt).format(config!.dateFormat),
                      },
                      {
                        header: 'Tools',
                        render: article => (
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
                    data={data?.articles}
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
