import React, { useEffect, useRef } from "react";
import FileField from "../../../../../../components/form/file";
import styled from "styled-components";
import { UploadButton } from "../../../../../../components/ui/buttons";
import { triggerFileInputClickByRef } from "../../../../../../components/form/file/input";
import { useFormContext, useWatch } from "react-hook-form";
import {
  convertFileContentToObject,
  getFileExtension,
  readFileContent,
} from "../../../../../../utils/file";
import { useGeneratorWizardContext } from "../../../../context";

const LoadDataFileForm: React.VFC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { save } = useGeneratorWizardContext();

  const { control } = useFormContext();
  const watchDataFile: File = useWatch({
    control,
    name: "data_file",
  });

  useEffect(() => {
    if (watchDataFile) {
      readFileContent(watchDataFile).then((content) => {
        const extension = getFileExtension(watchDataFile);
        const data = convertFileContentToObject(content, extension);
        save({ data });
      });
    }
    save({ data: null });
  }, [watchDataFile]);

  const handleLoadDataClick = () => {
    triggerFileInputClickByRef(inputRef);
  };

  return (
    <Container>
      <UploadButton onClick={handleLoadDataClick}>Load data file</UploadButton>
      <FileField
        inputRef={inputRef}
        name="data_file"
        label="Data file"
        placeholder="Select data file..."
        fullWidth
      />
    </Container>
  );
};

export default LoadDataFileForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 2rem;
`;
