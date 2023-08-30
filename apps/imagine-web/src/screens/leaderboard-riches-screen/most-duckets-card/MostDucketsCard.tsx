import React from 'react';

export function MostDucketsCard() {
  return (
    <div className="card border-secondary mb-3 animate__animated animate__fadeIn">
      <div className="card-header">Duckets</div>
      <table className="table table-tops table-hover text-center">
        <tbody>
          <tr className="table-warning">
            <td style={{ width: '10%' }}>1</td>
            <td style={{ width: '10%' }}>
              <div className="top-figure" style={{ background: `url(https://nitro-imager.kubbo.ch/?figure=/ch-3779-96-96.cc-5102.fa-618864-110.ca-3856-110-96.wa-3773-110.he-3324-110-96.sh-990000550-96.ha-3855-110.hd-209-1.hr-3860-100-96.lg-899624623-110-96.0&amp;gesture=sml)`, backgroundPosition: 'center 30%' }} />
            </td>
            <td style={{ width: '20%' }}><a href="/profile/yulian">yulian</a></td>
            <td style={{ width: '10%' }}><img src="/img/icons/duckets.png" /></td>
            <td style={{ width: '50%' }}>963.4M Créditos</td>
          </tr>
        </tbody></table>
    </div>
  )
}