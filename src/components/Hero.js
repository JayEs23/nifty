/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';


const Hero = () => {
    
    return (

<section className="py-0">
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-12 mx-auto">
				<div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
					<div className="tiny-slider-inner" data-gutter="0" data-arrow="true" data-dots="false" data-items="1">
						<div className="card overflow-hidden h-400px h-sm-500px rounded-0 hero">
							<div className="bg-overlay bg-dark opacity-3"></div>
							<div className="card-img-overlay d-flex align-items-center"> 
								<div className="container">
									<div className="row">
										<div className="col-11 col-lg-7">
											
											<h1 className="text-white display-6">The unsung metaverse starts here</h1>
											{/* <a href="#" className="btn btn-primary mb-0">Reserve Today</a> */}
                                            <h6 className="text-white fw-normal mb-0">Art, Music, Movie NFTs and more...</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>			
								
    );
};

export default Hero;
