import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../providers";
import { Profile } from "../../types";
import { patchHeroProfile } from "../apis";

export const usePatchHeroProfile = (id: string) => {
  return useMutation({
    mutationKey: ["patch-heros-profile"],
    mutationFn: (param: Profile) => patchHeroProfile(id, param),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heros-profile", { id }] });
    },
  });
};
