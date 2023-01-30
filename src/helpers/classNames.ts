export type Mods = Record<string, string | boolean | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) => {
    return [
        cls,
        ...Object.keys(mods).filter(key => mods[key]),
        ...additional.filter(Boolean),
    ].join(' ')
}