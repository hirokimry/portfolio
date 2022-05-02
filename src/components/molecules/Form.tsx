/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { init, send } from "emailjs-com";
import { SendButton } from "../atoms/SendButton";

export const Form: VFC = () => {
  const containerStyle = css`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;
  const customerStyle = css`
    width: 100%;

    display: flex;
    justify-content: space-around;
    gap: 30px;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      display: block;
    }
  `;

  type Inputs = {
    name: string;
    email: string;
    comment: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    /* Email送信処理 */
    const userId = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userId !== undefined &&
      serviceId !== undefined &&
      templateId !== undefined
    ) {
      init(userId);

      const templatePrams = {
        customer_name: data.name,
        customer_email: data.email,
        message: data.comment,
      };

      send(serviceId, templateId, templatePrams).then(() => {
        alert("お問い合わせありがとうございました。");
        reset();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={containerStyle}>
      <div css={customerStyle}>
        <TextField
          required
          label="Name"
          type="text"
          variant="standard"
          margin="normal"
          fullWidth
          error={Boolean(errors.name)}
          helperText={errors.name && "60文字以内で入力して下さい"}
          {...register("name", {
            required: true,
            maxLength: 60,
          })}
        />
        <TextField
          required
          label="Email"
          type="text"
          variant="standard"
          margin="normal"
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email && "メールアドレスの形式が不正です"}
          {...register("email", {
            required: true,
            maxLength: 254,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </div>
      <TextField
        required
        label="Comment"
        type="text"
        variant="standard"
        margin="normal"
        fullWidth
        multiline
        maxRows={4}
        error={Boolean(errors.comment)}
        helperText={errors.comment && "1000文字以内で入力して下さい"}
        {...register("comment", {
          required: true,
          maxLength: 1000,
        })}
      />
      <SendButton />
    </form>
  );
};
