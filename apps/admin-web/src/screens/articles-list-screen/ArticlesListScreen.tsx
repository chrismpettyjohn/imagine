import DayJS from 'dayjs';
import {ArticleWire} from '@imagine-cms/types';
import React, {useContext, useEffect} from 'react';
import {DataTable} from '../../components/data-table/DataTable';
import {configContext, useFetchArticles} from '@imagine-cms/web';
import {CreateArticleModal} from './create-article-modal/CreateArticleModal';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';
import {EditArticleModal} from './edit-article-modal/EditArticleModal';
import {DeleteArticleModal} from './delete-article-modal/DeleteArticleModal';

export function ArticlesListScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading} = useFetchArticles();

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
                  <h4 className="card-title">Articles</h4>
                </div>
                <div className="col-6 text-right">
                  <CreateArticleModal onCreate={() => console.log('woo')} />
                </div>
              </div>
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
                            <span className="mr-2">
                              <EditArticleModal article={article} onUpdate={updatedArticle => console.log(updatedArticle)} />
                            </span>
                            <DeleteArticleModal article={article} onDelete={() => console.log('deleted')} />
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
