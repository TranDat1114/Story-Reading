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
                                        <input type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Mật khẩu</span>
                                        </label>
                                        <input type="password" placeholder="******" className="input input-bordered" required />
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
                                        <input type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Mật khẩu</span>
                                        </label>
                                        <input type="password" placeholder="******" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Nhập lại mật khẩu</span>
                                        </label>
                                        <input type="password" placeholder="******" className="input input-bordered" required />
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