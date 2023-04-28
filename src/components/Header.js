import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import CasperConnect from '@/components/CasperConnect';

const Header = () => {
    const [publicKey, setPublicKey] = React.useState(null);
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(storedTheme || preferredTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const router = useRouter();

    const handleMintClick = () => {
        router.push('/mint'); // navigate to the minting page
    };
    

    return (
        <header className="navbar-dark header-sticky">
            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    <Link href="/" className="navbar-brand">
                        <img className="light-mode-item navbar-brand-item" src="/static/images/Niftylogo2.png" alt="logo" />
                        <img className="dark-mode-item navbar-brand-item" src="/static/images/NiftyRow-logo-dark.png" alt="logo" />
                    </Link>

                    <button className="navbar-toggler ms-auto mx-3 p-0 p-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll mx-auto">
                            <li className="nav-item">
                                <Link href="/marketplace" className="nav-link">
                                    Explore
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Market
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                    <li>
                                        <Link href="/marketplace/?category?digital-arts" className="dropdown-item">
                                            Digital Arts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/marketplace/?category=physical-arts" className="dropdown-item">
                                            Physical Arts
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="blockchainsMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blockchain
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="blockchainsMenu">
                                    <li className="dropdown-item">
                                        <a className="dropdown-item " href="https://app.niftyrow.io">
                                            Aurora (ETH)
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-item " href="https://app.niftyrow.io">
                                            Harmony
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-item" href="../../">
                                            Casper
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                        <li className="nav-item dropdown nav-search me-3 d-none d-sm-block">
                            <a className="nav-notification btn btn-light mb-0 p-0" href="#" id="searchDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-search"> </i>
                            </a>
                            <div className="dropdown-menu dropdown-animation dropdown-menu-end p-2" aria-labelledby="searchDropdown">
                                <div className="nav flex-nowrap align-items-center">
                                    <div className="nav-item w-100">
                                        <form className="input-group">
                                            <input className="form-control border-primary" type="search" placeholder="Search..." aria-label="Search" />
                                            <button className="btn btn-primary m-0" type="submit">
                                                Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="btn btn-primary btn-sm p-2 mb-0" href="#" role="button" aria-expanded="false" onClick={handleMintClick}>
                                <i className="bi bi-plus-circle-dotted"></i> Mint
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <CasperConnect />
                        </li>
                        <li className="nav-item dropdown">
                            <a className="btn btn-default-soft p-2 mb-0" href="#" role="button" aria-expanded="false" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} tabIndex={0} onClick={toggleTheme}>
                                {theme === 'light' ? <i className="bi bi-brightness-high text-light"></i> : <i className="bi bi-moon-stars text-dark"></i>}
                            </a>
                        </li>


                    </ul>
                </div>
            </nav>
        </header>
    );

};

export default Header;