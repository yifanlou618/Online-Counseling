import React, { Component } from 'react';
import './InfoPage.css';

class InfoPage extends Component {
    render() {
        var left = 390 + 'px';
        var top = 0 + 'px';
        return (
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ left: left, top: top, position: 'absolute' }}>
                    <header className="mb-auto">
                        <div>
                            <h3 className="float-md-start mb-0" style={{ color: 'white', fontWeight: 520 }}>Let's Talk</h3>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <a href='/' className="nav-link active" aria-current="page"><span style={{ fontSize: '18px' }}>Home</span></a>
                                <a href='login' className="nav-link active"><span style={{ fontSize: '18px' }}>Login</span></a>
                                <a href='signup' className="nav-link active"><span style={{ fontSize: '18px' }}>Sign Up</span></a>
                            </nav>
                        </div>
                    </header>
                    <div>
                        <ul style={{ left: '10px', top: '100px', position: 'absolute' }}>
                            <p>Mental illnesses affect 19% of the adult population, 46% of teenagers and 13% of children each year. 
                                People struggling with their mental health may be in your family, live next door, teach your children, 
                                work in the next cubicle or sit in the same church pew.
                                However, only half of those affected receive treatment, often because of the stigma attached to 
                                mental health. Untreated, mental illness can contribute to higher medical expenses, poorer 
                                performance at school and work, fewer employment opportunities and increased risk of suicide.
                            </p>
                            <p>
                                A mental illness is a physical illness of the brain that causes disturbances in thinking, behavior, 
                                energy or emotion that make it difficult to cope with the ordinary demands of life. 
                                Research is starting to uncover the complicated causes of these diseases which can include genetics, 
                                brain chemistry, brain structure, experiencing trauma and/or having another medical condition, 
                                like heart disease.
                            </p>
                            <p>The two most common mental health conditions are:</p>
                            <p>Anxiety Disorders – More than 18% of adults each year struggle with some type of anxiety disorder, 
                                including post-traumatic stress disorder (PTSD), obsessive-compulsive disorder (OCD), 
                                panic disorder (panic attacks), generalized anxiety disorder and specific phobias.
                            </p>
                            <p>Mood Disorders – Mood disorders, such as depression and bipolar depression, affect nearly 10% of 
                                adults each year and are characterized by difficulties in regulating one’s mood.
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoPage;