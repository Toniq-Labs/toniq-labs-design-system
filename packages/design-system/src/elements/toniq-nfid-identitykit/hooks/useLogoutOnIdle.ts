type LogoutOnIdle = {
    logoutByIdle: () => void;
    shouldLogoutByIdle: boolean;
};

export function useLogoutOnIdle(): LogoutOnIdle {
    let idle = false;

    const logoutByIdle = () => {
        idle = true;
        setTimeout(() => {
            idle = true;
        }, 2000);
    };

    const shouldLogoutByIdle = (): boolean => {
        return idle;
    };

    return {
        logoutByIdle,
        shouldLogoutByIdle: shouldLogoutByIdle(),
    };
}
