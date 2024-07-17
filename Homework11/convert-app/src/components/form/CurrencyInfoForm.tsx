import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Note } from "../../redux/reducers";
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

//import { TextArea } from "../textarea";

interface CurrencyInfoPageProps {
  onSubmit: (data: Note) => void;
  initialValues: {
    title: string;
    body: string;
  };
}

export const CurrencyInfoForm: React.FC<CurrencyInfoPageProps> = ({
  onSubmit,
  initialValues,
}) => {
  const { currencyId } = useParams<{ currencyId: string }>();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Note>();

  useEffect(() => {
    if (initialValues) {
      setValue("title", initialValues.title);
      setValue("body", initialValues.body);
    }
  }, [initialValues, setValue]);

  useEffect(() => {
    setTimeout(() => {
      if (message !== "") {
        setMessage("");
      }
    }, 3000);
  }, [message]);

  const handleFormSubmit = handleSubmit((data: Note) => {
    data.currencyId = currencyId;
    setMessage("Your notes are modified!");
    onSubmit(data);
  });

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Currency Info Page
      </Typography>
      <Typography variant="h3">
        Here you can leave your notes about the current currency
      </Typography>
      <Box display="flex" alignItems="center" gap="3rem" sx={{ pt: 4, pb: 1 }}>
        <form onSubmit={handleFormSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            gap="3rem"
            sx={{ pt: 4, pb: 1 }}
          >
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              <Box>
                <TextField
                  label="Title"
                  type="text"
                  id="title"
                  {...register("title", {
                    required: true,
                  })}
                />
                {errors.title && <span>This field is required</span>}
              </Box>
              <Box>
                {/* <TextArea text="body" {...register("body", { required: true })} /> 
    I really tried to do it. But this component has some troubles 
    It always gives me an error. So I guess the textarea from the MUI are not the best choice.
    */}
                <TextField
                  label="Body"
                  id="body"
                  {...register("body", {
                    minLength: {
                      value: 6,
                      message: "Body should have at least 6 characters",
                    },
                  })}
                />
                {errors.body && (
                  <span>Body should have at least 6 characters</span>
                )}
              </Box>
            </Stack>

            <Button type="submit" variant="contained">
              Save Note
            </Button>
          </Box>
        </form>
        {message && (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setMessage("");
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
          >
            {message}
          </Alert>
        )}
      </Box>
    </Box>
  );
};
