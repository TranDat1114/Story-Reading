import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

const SignUpSignInModal = () => {
    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box lg:max-w-md">
                    <Tabs>
                        <TabList>
                            <Tab>Đăng nhập</Tab>
                            <Tab>Đăng ký</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="card shrink-0 w-full h-[30rem] shadow-2xl bg-base-100">
                                <h1 className="font-semibold mx-8 text-2xl mt-6">Đăng nhập</h1>
                                <p className="text-base-content mt-2 mx-8">Đăng nhập để trải nghiệm tốt nhất.</p>
                                <form className="card-body p-3 md:p-7">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                            <input type="text" className="grow" placeholder="Email" required />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Mật khẩu</span>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                            <input type="password" className="grow" placeholder="******" required />
                                        </label>
                                        {/* <label className="label">
                                                        <a href="#" className="label-text-alt link link-hover">Quên mật khẩu?</a>
                                                    </label> */}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Đăng nhập</button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="card shrink-0 w-full h-[30rem] shadow-2xl bg-base-100">
                                <form className="card-body p-3 md:p-7">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                            <input type="text" className="grow" placeholder="Email" required />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">

                                            <span className="label-text font-semibold">Mật khẩu</span>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                            <input type="password" className="grow" placeholder="******" required />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Nhập lại mật khẩu</span>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                            <input type="password" className="grow" placeholder="******" required />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="cursor-pointer label gap-4">
                                            <input type="checkbox" className="checkbox checkbox-accent" />
                                            <span className="label-text">Tôi đã đọc và đồng ý <a className="link link-info" href="/terms" target="_bank">điều khoản sử dụng</a> và <a className="link link-info" href="/privacy" target="_bank">bảo mật</a> của Website.</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <button className="btn btn-primary">Đăng ký</button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

const SignUpSignInButton = () => {
    return (
        <button className="btn btn-outline" onClick={() => (document.getElementById('my_modal_5') as HTMLDialogElement)?.showModal()}>Đăng nhập / Đăng ký</button>
    )
}

export { SignUpSignInModal, SignUpSignInButton }