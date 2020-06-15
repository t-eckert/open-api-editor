import Doc from "@/interfaces/Doc";
import Suggestion from "@/interfaces/Suggestion";

class PaletteSuggestor {
  private doc: Doc;
  private suggestionFunctions: (() => void)[];
  private suggestions: Suggestion[] = [];

  constructor(doc: Doc) {
    this.doc = doc;
    this.suggestionFunctions = [this.docIsMissingVersion];
  }

  updateDoc = (doc: Doc): PaletteSuggestor => {
    this.doc = doc;
    return this;
  };

  suggest = (): Suggestion[] => {
    this.suggestions = [];
    this.suggestionFunctions.forEach((fn) => fn());
    return this.suggestions;
  };

  private docIsMissingVersion = () => {
    if (this.doc.openapi === undefined) {
      this.suggestions.push({
        message: "Add openapi",
      });
    }
  };
}

export default PaletteSuggestor;
