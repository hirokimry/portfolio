import { createContext, useState, useCallback } from "react";

/* Context Type */
type ThemeContext = {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
  skill: string;
  url: string;
  setIsTitle: (isTitle: string) => void;
  setIsImage1: (isImage1: string) => void;
  setIsImage2: (isImage2: string) => void;
  setIsImage3: (isImage3: string) => void;
  setIsDescription: (isDescription: string) => void;
  setIsSkill: (isSkill: string) => void;
  setIsUrl: (isUrl: string) => void;
};

/* Default(init) */
const defaultContext: ThemeContext = {
  title: "",
  image1: "",
  image2: "",
  image3: "",
  description: "",
  skill: "",
  url: "",
  setIsTitle: () => {},
  setIsImage1: () => {},
  setIsImage2: () => {},
  setIsImage3: () => {},
  setIsDescription: () => {},
  setIsSkill: () => {},
  setIsUrl: () => {},
};

/* Context Object */
export const workDataContext = createContext(defaultContext);

/* Custom Hook */
export const useWorkData = (): ThemeContext => {
  const [title, setTitle] = useState<string>("");
  const [image1, setImage1] = useState<string>("");
  const [image2, setImage2] = useState<string>("");
  const [image3, setImage3] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const setIsTitle = useCallback((current: string): void => {
    setTitle(current);
  }, []);
  const setIsImage1 = useCallback((current: string): void => {
    setImage1(current);
  }, []);
  const setIsImage2 = useCallback((current: string): void => {
    setImage2(current);
  }, []);
  const setIsImage3 = useCallback((current: string): void => {
    setImage3(current);
  }, []);
  const setIsDescription = useCallback((current: string): void => {
    setDescription(current);
  }, []);
  const setIsSkill = useCallback((current: string): void => {
    setSkill(current);
  }, []);
  const setIsUrl = useCallback((current: string): void => {
    setUrl(current);
  }, []);

  return {
    title,
    image1,
    image2,
    image3,
    description,
    skill,
    url,
    setIsTitle,
    setIsImage1,
    setIsImage2,
    setIsImage3,
    setIsDescription,
    setIsSkill,
    setIsUrl,
  };
};
