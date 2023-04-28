/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';

const MintForm = () => {
    const [publicKey, setPublicKey] = React.useState(null);
    const [category, setCategory] = useState('');
    const [artworkFile, setArtworkFile] = useState(null);
    const [musicThumbnail, setMusicThumbnail] = useState(null);
    const [musicThumbnailUrl, setMusicThumbnailUrl] = useState('');
    const [musicFileUrl, setMusicFileUrl] = useState('');
    const [movieThumbnailUrl, setMovieThumbnailUrl] = useState('');
    const [movieFileUrl, setMovieFileUrl] = useState('');
    const [musicSample, setMusicSample] = useState(null);
    const [movieThumbnail, setMovieThumbnail] = useState(null);
    const [movieSample, setMovieSample] = useState(null);
    const [nftName, setNftName] = useState('');
    const [nftDescription, setNftDescription] = useState('');
    const [socialMediaLink, setSocialMediaLink] = useState('');
    const [assetSymbol, setAssetSymbol] = useState('');
    const [assetType, setAssetType] = useState('Digital');
    const [artistName, setArtistName] = useState('');
    const [medium, setMedium] = useState('');
    const [year, setYear] = useState('');
    const [size, setSize] = useState('');


    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!category || !assetType) {
            alert("Please select asset category and type.");
            return;
        }

        if (category === "Artwork" && !artworkFile) {
            alert("Please upload an artwork image.");
            return;
        } else if (category === "Music" && (!musicThumbnail || !musicSample)) {
            alert("Please upload both the audio thumbnail and sample file.");
            return;
        } else if (category === "Movie" && (!movieThumbnail || !movieSample)) {
            alert("Please upload both the video thumbnail and file.");
            return;
        }

        const formData = new FormData();
        const files = {}
        if (artworkFile) {
            Object.assign(files,{'artFile':artworkFile});
            // formData.append('artFile', artworkFile);
        }
        if (musicThumbnail) {
            Object.assign(files,{'musicThumbnail':musicThumbnail});
            // formData.append();
        }
        if (musicSample) {
            Object.assign(files,{'musicFile':musicSample});
            // formData.append('', );
        }
        if (movieThumbnail) {
            Object.assign(files,{'movieThumbnail':movieThumbnail});
            // formData.append('', );
        }
        if (movieSample) {
            Object.assign(files,{'movieFile':movieSample});
            // formData.append('', );
        }
        console.log(files);
        formData.append('mediaType', category.toLowerCase());
        formData.append('files', files);
        console.log(JSON.stringify(formData));
        try {
            const { data } = await axios.post('http://localhost:5000/api/nft/generateMediaUrls', formData);

            if (category === "Artwork") {
                setArtworkFile(null);
                setMovieThumbnailUrl('');
                setMovieFileUrl('');
                setMusicThumbnailUrl('');
                setMusicFileUrl('');
                setMusicSample(null);
                setMovieThumbnail(null);
                setMovieSample(null);
                setMusicThumbnail(null);
                setArtworkFile(data.artworkUrl);
            } else if (category === "Music") {
                setArtworkFile(null);
                setMovieThumbnailUrl('');
                setMovieFileUrl('');
                setMusicThumbnailUrl(data.thumbnailUrl);
                setMusicFileUrl(data.fileUrl);
            } else if (category === "Movie") {
                setArtworkFile(null);
                setMusicThumbnailUrl('');
                setMusicFileUrl('');
                setMovieThumbnailUrl(data.thumbnailUrl);
                setMovieFileUrl(data.fileUrl);
            };
        }catch(err){
            console.log(err);
        };

        // const nftData = {
        //     tokenId: tokenId,
        //     deployerKey: deployerKey,
        //     ownerKey: ownerKey,
        //     tokenHash: tokenHash,
        //     name: nftName,
        //     description: nftDescription,
        //     socialMediaLink: socialMediaLink,
        //     assetSymbol: assetSymbol,
        //     assetType: assetType,
        //     mediaType: category,
        //     artistName: artistName,
        //     medium: medium,
        //     year: year,
        //     size: size,
        //     artworkUrl: artworkUrl,
        //     musicThumbnailUrl: movieFileUrl,
        //     musicFileUrl: musicFileUrl,
        //     movieThumbnailUrl: movieThumbnailUrl,
        //     movieFileUrl: movieFileUrl,
        // };
        
        // console.log(nftData);
        
        // try {
        //     const createResponse = await fetch('http://localhost:5000//api/nft/addNft', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(nftData),
        //     });
        
        //     if (createResponse.ok) {
        //         alert('NFT created successfully.');
        //     } else {
        //         alert('Failed to create NFT.');
        //     }
        // } catch (error) {
        //     console.log(error);
        //     alert('An error occurred while creating NFT.');
        // }
    }
        

    

  
    return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <form className="vstack gap-4" onSubmit={handleSubmit}>
                        <div className="card shadow">
                            <div className="card-header border-bottom">
                                <h5 className="mb-0">NFT Details</h5>
                            </div>
                        </div>
                        <div className="card-body shadow mb-4">
							<div className="row g-3 mb-4 p-12" >
                                <div className="col-md-6">
									<label className="form-label text-dark text-bold">Asset Category *</label>
									<div className="d-sm-flex">
										<div className="form-check radio-bg-light me-4">
											<input className="form-check-input" name="category" value="Artwork" type="radio" id="category1" checked={category === "Artwork"} onChange={(e) => setCategory(e.target.value)} />
											<label className="form-check-label" for="category1">
												Artwork
											</label>
										</div>
										<div className="form-check radio-bg-light me-4">
											<input className="form-check-input" type="radio" name="category" value="Music" id="category2" checked={category === "Music"} onChange={(e) => setCategory(e.target.value)}  />
											<label className="form-check-label" for="category2">
												Music
											</label>
										</div>
                                        <div className="form-check radio-bg-light me-4">
											<input className="form-check-input" type="radio" name="category" value="Movie" id="category3" checked={category === "Movie & Animation"} onChange={(e) => setCategory(e.target.value)} />
											<label className="form-check-label" for="category3">
												Movies & Animations
											</label>
										</div>
									</div>
								</div>
                                <div className="col-md-6">
									<label className="form-label text-dark text-bold">Asset Type *</label>
									<div className="d-sm-flex">
										<div className="form-check radio-bg-light me-4">
											<input className="form-check-input" type="radio" name="assetType" id="assetType1" value="Digital" checked={assetType === "Digital"} onChange={(e) => setAssetType(e.target.value)} />
											<label className="form-check-label" for="assetType1">
												Digital Asset
											</label>
										</div>
										<div className="form-check radio-bg-light me-4">
											<input className="form-check-input" type="radio"name="assetType" id="assetType2" value="Physical" checked={assetType === "Physical"} onChange={(e) => setAssetType(e.target.value)}  />
											<label className="form-check-label" for="assetType2">
												Physical Asset
											</label>
										</div>
                                        
									</div>
								</div>
                                <div className="col-md-6">
                                    <div className="card ">
                                        {/* <div className="card-header border-bottom">
                                            <h5 className="mb-0">Upload Files</h5>
                                        </div> */}
                                        <div class="card-body">
                                            <div class="row g-3">
                                            {category === "Artwork" && (
                                                <div class="col-12">
                                                    <label class="form-label">Image upload for artwork:</label>
                                                    <input class="form-control" type="file" id="artwork-image" onChange={(e) => setArtworkFile(e.target.files[0])} accept="image/gif, image/jpeg, image/png" />
                                                    {/* <p class="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px. The larger image will be cropped to 4:3 to fit our thumbnails/previews.</p> */}
                                                </div>
                                            )}
                                            {category === "Music" && (
                                                <><div class="col-12">
                                                    <label class="form-label">Audio Thumbnail Image:</label>
                                                    <input class="form-control" type="file" id="thumbnail-image" onChange={(e) => setMusicThumbnail(e.target.files[0])} accept="image/gif, image/jpeg, image/png" />
                                                    {/* <p class="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px. The larger image will be cropped to 4:3 to fit our thumbnails/previews.</p> */}
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Sample audio file:</label>
                                                    <input class="form-control" type="file" id="sample-audio" onChange={(e) => setMusicSample(e.target.files[0])} accept="audio/wav, audio/mp3" />
                                                    <p class="small mb-0 mt-2"><b>Note:</b> Only .MP3, .WAV, and .MP4 accepted. </p>
                                                </div></>
                                            )}
                                            {category === "Movie & Animation" && (
                                                <><div class="col-12">
                                                    <label class="form-label">Video Thumbnail Image:</label>
                                                    <input class="form-control" type="file" id="movie-thumbnail-image"  onChange={(e) => setMovieThumbnail(e.target.files[0])}  accept="image/gif, image/jpeg, image/png" />
                                                    {/* <p class="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px. The larger image will be cropped to 4:3 to fit our thumbnails/previews.</p> */}
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Sample Video file:</label>
                                                    <input class="form-control" type="file" name="my-image" id="artwork-image"  onChange={(e) => setMovieSample(e.target.files[0])} accept="video/mp4, video/mov, video/webm" />
                                                    <p class="small mb-0 mt-2"><b>Note:</b> Only .MP4, .MOV, and .WEBM accepted. </p>
                                                </div></>
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card ">
                                        <div class="card-body">
                                            <div class="row g-3">
                                            {assetType === "Digital" && (
                                                <div class="col-12">
                                                </div>
                                            )}
                                            {assetType === "Physical" && (
                                                <><div class="col-6">
                                                    <label class="form-label">Artist Name:</label>
                                                    <input class="form-control" type="text" id="thumbnail-image" onChange={(e) => setArtistName(e.target.files[0])} accept="image/gif, image/jpeg, image/png" />
                                                    {/* <p class="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions are 600px * 450px. The larger image will be cropped to 4:3 to fit our thumbnails/previews.</p> */}
                                                </div>
                                                <div class="col-6">
                                                    <label class="form-label">Medium:</label>
                                                    <input class="form-control" type="text" value={medium} onChange={(e) => setMedium(e.target.value)} />
                                                </div>
                                                <div class="col-6">
                                                    <label class="form-label">Production Year:</label>
                                                    <input class="form-control" type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                                                </div>
                                                <div class="col-6">
                                                    <label class="form-label">Asset Size:</label>
                                                    <input class="form-control" type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                                                </div></>
                                            )}
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>

								<div className="col-md-6">
									<label className="form-label text-dark text-bold">Asset Name/Title</label>
									<input className="form-control" type="text" placeholder="Enter Asset name" value={nftName} onChange={(e) => setNftName(e.target.value)} />
								</div>
                                <div className="col-md-6">
                                    <label className="form-label text-dark text-bold">Asset Symbol</label>
									<input className="form-control" type="text" placeholder="Enter Asset Symbol E.g NGH" value={assetSymbol} onChange={(e) => setAssetSymbol(e.target.value)} />
								</div>
                                <div className="col-md-12">
                                    <label className="form-label text-dark text-bold">Asset Description</label>
									<textarea className="form-control" rows="6" placeholder="Enter Asset Description" value={nftDescription} onChange={(e) => setNftDescription(e.target.value)}></textarea>
								</div>
                                <div className="col-md-6">
									<label className="form-label text-dark text-bold">Asset Social Link</label>
									<input className="form-control" type="text" placeholder="Enter Social Link" value={socialMediaLink} onChange={(e) => setSocialMediaLink(e.target.value)} />
								</div>
                            </div>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-success mb-0">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </section>
    );
};

export default MintForm;
