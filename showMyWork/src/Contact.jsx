import React from 'react'

const Contact = () => {
    return (
        <section className='topSection'>
            <div className='container'>
                <div className='lg:w-4/5 mx-auto text-center border'>
                    <div className='shadow-2xl rounded-lg min-h-[350px] p-10'>
                        <h1
                            className='text-gray-800 uppercase tracking-widest font-medium text-4xl mb-5'>Get in touch</h1>
                        <div className='h-0.5 bg-primary w-14 mx-auto mb-4'></div>
                        <p className='text-gray-800 text-base leading-6 mb-14'>Creating Beautiful, User-Centric Experiences</p>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {/* label */}
                            <div>
                                <address>
                                    <div className='mb-6'>
                                        <h2 className='text-base font-medium mb-1'>
                                            Office Address 1:
                                        </h2>
                                        <p className='text-sm font-medium leading-5'>
                                            9340 W 49th Ave, Co 80033
                                        </p>

                                    </div>
                                    <div>
                                        <h2 className='text-base font-medium mb-1'>
                                            Office Hour:
                                        </h2>
                                        <p className='text-sm font-medium leading-5'>
                                            9:00AM to 6:00PM
                                        </p>

                                    </div>
                                </address>
                            </div>
                            {/* form */}
                            <div className='lg:col-span-2'>
                                <form action="">
                                    <div className='space-y-6'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                            {/* name */}
                                            <label for="name" className='sr-only'>Name</label>
                                            <input
                                                type="text"
                                                name='name'
                                                id='name'
                                                className='form-input'
                                                placeholder='Enter your name'/> {/* email */}
                                            <label for="email" className='sr-only'>Name</label>
                                            <input
                                                type="email"
                                                name='email'
                                                id='email'
                                                className='form-input'
                                                placeholder='Enter your email'/>
                                        </div>
                                        {/* subject */}
                                        <label for="subject" className='sr-only'>Name</label>
                                        <input
                                            type="text"
                                            name='subject'
                                            id='subject'
                                            className='form-input'
                                            placeholder='Enter your subject'/>
                                          <label for="comment" className='sr-only'>Name</label>
                                          <textarea type="text" name='comment' id='comment' className='form-input' placeholder='Enter your message' rows="10"></textarea>
                                          {/* button */}
                                          <div className='text-right'>

                                            <input type="submit" id='submit' name='send' className='btn2' value="Send Message"/>
                                          </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact