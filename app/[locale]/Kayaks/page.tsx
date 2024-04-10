import kayaksStyles from "./styles.module.css";
import globalStyles from "../page.module.css";
import Frame from "@/app/_components/Frame/page";

// const styles = { ...kayaksStyles, ...globalStyles };

export default async function KayaksPage() {
  return <Frame frameTitle="Kayaks" />;
}
