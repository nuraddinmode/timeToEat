import styled from "styled-components";
import { Device } from "@shared/styles/media";
import { DataInput } from "@shared/components/DataInput";
import Email from "@assets/icons/email.svg?component";
import { Colors } from "@shared/styles/Colors";
import { Button } from "@shared/components/Button";
import { SubscriptionSuccessModal } from "@shared/UI/Modals/SubscriptionSuccessModal";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@shared/schema";
import { Font } from "@shared/fonts";

const Root = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 30px;

  @media ${Device.Tablet} {
    gap: 40px;
  }
  @media ${Device.Laptop} {
    padding-right: 60px;
    padding-left: 60px;
    margin-bottom: 60px;
  }
`;

const Wrapper = styled.div`
  padding: 30px;
  background-color: ${Colors.background.subscription};
  border-radius: 30px;

  @media ${Device.Laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: ${Colors.white};
  text-align: center;
  ${Font.Text.H2}
  margin-bottom: 15px;

  @media ${Device.Laptop} {
    text-align: start;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media ${Device.Laptop} {
    flex-direction: row;
    align-items: start;
    gap: 15px;
    margin-bottom: 0;
  }
`;

const Description = styled.h5`
  color: ${Colors.white};
  ${Font.Text.H5}
  max-width: 295px;
  text-align: center;

  @media ${Device.Laptop} {
    max-width: fit-content;
    text-align: start;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media ${Device.Laptop} {
    gap: 20px;
    flex-direction: row;
    max-height: 47px;
  }
`;

const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.p`
  ${Font.Text.P}
  position: absolute;
  bottom: -18px;
  left: 0;
  color: white;
`;

type FormData = {
  email: string;
};

const Subscription = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("SUBSCRIBE:", data);

    setIsSuccess(true);
    reset();
  };

  return (
    <Root>
      <Wrapper>
        <div>
          <Title>Будьте всегда в курсе!</Title>

          <DescriptionContainer>
            <Email />
            <Description>
              Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и
              новостей!
            </Description>
          </DescriptionContainer>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Field>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <DataInput
                      {...field}
                      type="text"
                      placeholder="Укажите вашу почту"
                    />
                  )}
                />

                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </Field>
            </div>

            <Button width="160px" type="submit">
              Подписаться
            </Button>
          </FormContainer>
        </form>
      </Wrapper>

      {isSuccess && (
        <SubscriptionSuccessModal onClose={() => setIsSuccess(false)} />
      )}
    </Root>
  );
};

export { Subscription };
