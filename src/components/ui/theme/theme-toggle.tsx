import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
interface prop {
    variant?: "with-text" | "default"
}

export default function ThemeToggle(
    { variant }: prop
) {

    const [isDark, setIsDark] = useState<boolean>(
        JSON.parse(localStorage.getItem('isDark') || 'false')
    );

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark]);

    // Not config yet

    switch (variant) {
        case "with-text":
            {
                return (
                    <label className="swap swap-rotate justify-start">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" checked={!isDark} onChange={() => setIsDark(!isDark)} className="theme-controller" value="coffee" />

                        <div className="swap-off flex items-center gap-2 justify-start">
                            <div className="badge badge-outline ">
                                <Sun size={16} className="fill-current" />
                            </div>
                            <p className="">
                            </p>
                        </div>
                        <div className="swap-on flex items-center gap-2 justify-start">
                            <div className="badge badge-outline">
                                <Moon size={16} className="" />
                            </div>
                            <p className="">
                            </p>
                        </div>
                    </label>

                )
            }
        default: {
            return (

                <label className="swap swap-rotate btn btn-square btn-ghost btn-md">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" checked={isDark} onChange={() => setIsDark(!isDark)} className="theme-controller" value="dark" />

                    {/* sun icon */}
                    <Sun size={24} className="fill-current swap-on text-warning" />

                    {/* moon icon */}
                    <Moon size={24} className="fill-current swap-off" />
                </label>

            )
        }
    }
}