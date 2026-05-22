export type PropostasLayer = "nucleo" | "code" | "workshop";

export interface TrilhaCourse {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  layer: PropostasLayer;
  optional: boolean;
  prerequisites: string[];
  moduleNumber: number | null;
  status?: "em-definicao";
  /** Ex.: Até 30 pessoas */
  audience?: string;
  /** Ex.: 100% online via Teams ou Meet */
  delivery?: string;
}

export interface TrilhaData {
  client: string;
  title: string;
  description: string;
  layers: { id: PropostasLayer; label: string }[];
  courses: TrilhaCourse[];
}

export interface DetalheFile {
  slug: string;
  title: string;
  filename: string;
}
