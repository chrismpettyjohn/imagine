import DayJS from 'dayjs';
import { useRoute } from 'wouter';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useEffect } from 'react';
import { usePhotoFetchOne } from '@imagine-cms/client';
import { ProfileViewPhotoScreenContainer, ProfileViewPhotoScreenImagePreview, ProfileViewPhotoScreenInfoContainer } from './ProfileViewPhotoScreen.styled';

export function ProfileViewPhotoScreen() {
  const { config } = useContext(configContext);
  const [_, params] = useRoute<{ photoID: string }>('/photos/:photoID');

  const photoID = Number(params!.photoID);

  const { data, fetch } = usePhotoFetchOne();

  useEffect(() => {
    fetch({ id: photoID })
  }, [photoID]);


  return (
    <>
      <h1>View Photo</h1>
      <br />
      {
        data && (
          <ProfileViewPhotoScreenContainer>
            <div>
              <ProfileViewPhotoScreenImagePreview src={data.photoURL} />
              <ProfileViewPhotoScreenInfoContainer>
                <b>Taken By: </b>
                <b className="blue">{data.user.username}</b>
                <b> Captured On: </b>
                <b className="blue">{DayJS.unix(data.createdAt).format(config!.dateFormat)}</b>
              </ProfileViewPhotoScreenInfoContainer>
            </div>
          </ProfileViewPhotoScreenContainer >
        )
      }
    </>
  )
}