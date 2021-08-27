enum GeneralRoutes {
    home = 'home',
    protectiveFootwear = 'protective',
    professionalFootwear = 'professional',
    medicalFootwear = 'medical',
    accessories = 'accessories',
    aboutUs = 'about',
}

export type AppRoutes = typeof AppRoutes;

export const AppRoutes = {
    ...GeneralRoutes,
}