import DayJS from 'dayjs';
import { Link, useRoute } from 'wouter';
import { configContext } from '@imagine-cms/web';
import { usePhotoFetchOne } from '@imagine-cms/client';
import React, { useContext, useEffect, useState } from 'react';
import { PhotoCommentsCard } from './photo-comments-card/PhotoCommentsCard';
import { PhotoCreateCommentCard } from './photo-create-comment-card/PhotoCreateCommentCard';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';
import { ProfileViewScreenContainer, ProfileViewScreenImagePreview, ProfileViewScreenInfoContainer } from './ProfileViewScreen.styled';

export function ProfileViewScreen() {
  const [key, setKey] = useState(0);
  const { config } = useContext(configContext);
  const [_, params] = useRoute<{ photoID: string }>('/photos/:photoID');
  const photoID = Number(params!.photoID);

  const bumpKey = () => setKey(_ => _ + 1);

  const { data, fetch } = usePhotoFetchOne();

  useEffect(() => {
    fetch({ id: photoID })
  }, [photoID]);


  return (
    <>
      <h1><Link to="/photos"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Photos - #{photoID}</h1>
      <br />
      {
        data && (
          <ProfileViewScreenContainer>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <ProfileViewScreenImagePreview src={data.photoURL} />
              <br />
              <div style={{ display: 'flex', flex: 1, gap: 16 }}>
                {data.user && <SmallUserProfileContainer user={data.user as any} />}
                <ProfileViewScreenInfoContainer>
                  <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 8 }}>
                    <b> Captured On: </b>
                    <b className="blue">{DayJS.unix(data.createdAt).format(config!.dateFormat)}</b>
                    <b> Likes </b>
                    <b className="blue">0 <i className="fa fa-thumbs-up" /></b>
                    <b> Dislikes: </b>
                    <b className="red">0 <i className="fa fa-thumbs-down" /></b>
                  </div>
                </ProfileViewScreenInfoContainer>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} key={`photo_${key}`}>
              <PhotoCommentsCard photo={data} />
              <br />
              <PhotoCreateCommentCard photoID={data.id} onCreation={bumpKey} />
            </div>
          </ProfileViewScreenContainer >
        )
      }
    </>
  )
}