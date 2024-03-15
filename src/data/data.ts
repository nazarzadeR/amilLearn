import { nanoid } from "@reduxjs/toolkit";

import type { TUserMeta } from "../type";

export const defaultUsers: TUserMeta[] = [
    {
        key: nanoid(),
        name: "Amil",
        gender: "random",
        surname: "Musaevi",
        patronymic: "┌( ಠ‿ಠ )┘",
    },
    {
        key: nanoid(),
        name: "Famil",
        gender: "random",
        surname: "Qusaevi",
        patronymic: "┌( ಠ‿ಠ )┘",
    },
    {
        key: nanoid(),
        name: "Pamil",
        gender: "random",
        surname: "Gusaevi",
        patronymic: "┌( ಠ‿ಠ )┘",
    },
    {
        key: nanoid(),
        name: "Qabil",
        surname: "Qusaevi",
        gender: "random",
        patronymic: "┌( ಠ‿ಠ )┘",
    },

    
]