import { AppEffects } from "./app.effects";
import { mainLayoutStorageEffects } from "./pages/main-layout/storage/effetcts";

export const effects = [
    AppEffects,
    ...mainLayoutStorageEffects,
];