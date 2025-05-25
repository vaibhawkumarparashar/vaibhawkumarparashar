import React from 'react';

export default function Blog() {
    return (
        <>
        <div id="blog" className="sa-section">
            <div className="section-content section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <span>News & Update</span>
                        <h1>Update & Blog</h1>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="post">
                                    <div className="entry-header">
                                        <div className="entry-thumbnail">
                                            <a href="blog-details.html">
                                                <img src="assets/images/blog/1.jpg" alt="Image"
                                                    className="img-fluid"/></a>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <h2 className="entry-title"><a href="blog-details.html">Coming Soon</a></h2>
                                        <div className="entry-meta">
                                            <ul className="global-list">
                                                <li><a href="#">By Admin..</a></li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-white" href="#">Coming Soon..<span><i
                                                    className="fas fa-long-arrow-alt-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="post">
                                    <div className="entry-header">
                                        <div className="entry-thumbnail">
                                            <a href="blog-details.html">
                                                <img src="assets/images/blog/2.jpg" alt="Image"
                                                    className="img-fluid"/></a>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <h2 className="entry-title"><a href="blog-details.html">Coming Soon</a></h2>
                                        <div className="entry-meta">
                                            <ul className="global-list">
                                                <li><a href="#">By Admin</a></li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-white" href="#">Coming Soon..<span><i
                                                    className="fas fa-long-arrow-alt-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="post">
                                    <div className="entry-header">
                                        <div className="entry-thumbnail">
                                            <a href="blog-details.html">
                                                <img src="assets/images/blog/3.jpg" alt="Image"
                                                    className="img-fluid"/></a>
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <h2 className="entry-title"><a href="blog-details.html">Coming Soon</a>
                                        </h2>
                                        <div className="entry-meta">
                                            <ul className="global-list">
                                                <li><a href="#">By Admin</a></li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-white" href="#">Coming Soon..<span><i
                                                    className="fas fa-long-arrow-alt-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}