import React, { useEffect } from "react";
import { TextFormField } from "../../../../../../components/form";
import { useFormContext, useWatch } from "react-hook-form";
import { useGeneratorWizardContext } from "../../../../context";

const LoadDataInputForm: React.VFC = () => {
  const { save } = useGeneratorWizardContext();
  const { control } = useFormContext();

  const watchData = useWatch({ control, name: "data" });

  useEffect(() => {
    if (watchData) {
      try {
        save({
          data: JSON.parse(watchData),
        });
      } catch (error) {
        save({ data: {} });
      }
    } else {
      save({ data: null });
    }
  }, [watchData]);

  return (
    <>
      <TextFormField
        name="data"
        label="JSON data"
        multiline
        rows={16}
        fullWidth
      />
    </>
  );
};

export default LoadDataInputForm;
