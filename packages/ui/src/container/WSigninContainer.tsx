interface WSigninContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export function WSigninContainer(props: WSigninContainerProps) {
  const { children } = props;
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="container mx-auto h-full max-w-xl p-6 ">
        <div className="flex h-full flex-col justify-center">
          <div className="w-full rounded-xl bg-white px-24 py-20">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
