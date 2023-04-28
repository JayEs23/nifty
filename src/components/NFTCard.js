import React from 'react';

function NFTCard({ nft }) {
  return (
    
    <>
    <div className="col-md-6 col-xl-4">
        <div className="card shadow p-2 pb-0 h-100">
            {nft.mediaType === 'artwork' && <img src={nft.artworkUrl} className="rounded-2 img-height" alt={nft.mediaName} />}
            {nft.mediaType === 'music' && <img src={nft.musicThumbnailUrl} className="rounded-2 img-height" alt={nft.mediaName} />}
            {nft.mediaType === 'movie' && <img src={nft.movieThumbnailUrl} className="rounded-2 img-height" alt={nft.mediaName} />}

            <div className="card-body px-3 pb-0">
                <div className="d-flex justify-content-between mb-3">
                    
                </div>

                <h5 className="card-title"><a href="#">{nft.mediaName}</a></h5>

                
            </div>

            <div className="card-footer pt-0">
                <div className="d-sm-flex justify-content-sm-between align-items-center">
                    <div className="d-flex align-items-center">
                        <h5 className="fw-normal text-success mb-0 me-1">{nft.assetSymbol}</h5>
                        <span className="mb-0 me-2"> / {nft.assetType}</span>
                    </div>
                    <div className="mt-2 mt-sm-0 z-index-2">
                        <a href="/assetDetails/{nft.tokenId}" className="btn btn-sm btn-primary-soft mb-0 w-100">View Detail<i className="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div></>
  );
}

export default NFTCard;
