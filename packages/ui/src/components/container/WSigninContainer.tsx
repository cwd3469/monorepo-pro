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
      <div className="px-15 container mx-auto h-full max-w-2xl py-5">
        <div className="flex h-full flex-col justify-center px-0.5">
          <div className="w-full rounded-xl bg-white px-20 py-14">
            <div className="flex flex-col items-center px-2.5 py-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
