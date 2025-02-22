import {Controller} from "react-hook-form";

interface componentProps {
  name: string;
  label?: string;
  placeholder: string;
  error?: string;
  type: string;
  control: any;
  autoComplete?: string;
  allowDecimal?: boolean;
  disabled?: boolean;
  Icon?: React.ComponentType;
  rows?: number;
  resize?: boolean;
}

export const PrimaryTextAreaInput = ({
  name,
  placeholder,
  error,
  type,
  control,
  label,
  autoComplete,
  allowDecimal,
  disabled,
  Icon,
  rows = 4,
  resize,
}: componentProps) => {
  const excepNumberSymbolsWithoutDecimal = ["e", "E", "+", "-", "."];

  const excepNumberSymbolsWithDecimal = ["e", "E", "+", "-"];

  const excepNumberSymbols = allowDecimal
    ? excepNumberSymbolsWithDecimal
    : excepNumberSymbolsWithoutDecimal;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({field: {onChange, value}}) => (
        <div>
          {label && (
            <label
              htmlFor="input-group-1"
              className={`mb-2 block text-[14px] font-[400] leading-[16.94px] ${
                error ? "text-red-500" : "text-[#9CA3AF] "
              } `}
            >
              {label}
            </label>
          )}

          <div className="relative text-gray-500">
            {Icon && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                <Icon />
              </div>
            )}

            <textarea
              className={`placeholder:font-[500] rounded-[8px] text-[16px] border-[1px] font-semibold ${
                error
                  ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:outline-red-500"
                  : "border-[#374151] bg-[#1F2937] font-[400] placeholder:text-[#ADAEBC] text-white placeholder:font-[400] focus:outline-blue-500"
              } block w-full p-[16px] ${disabled ? "cursor-not-allowed" : ""} ${
                resize ? "resize" : "resize-none"
              } `}
              value={value}
              onChange={e => onChange(e)}
              placeholder={placeholder}
              name={name}
              id={`${name}-default-input`}
              disabled={disabled}
              autoComplete={autoComplete}
              aria-autocomplete="none"
              onKeyDown={e =>
                excepNumberSymbols.includes(e.key) &&
                type === "number" &&
                e.preventDefault()
              }
              rows={rows}
            />
          </div>

          {error && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-500">
              <span className="font-medium">Opps!</span> {error}
            </p>
          )}
        </div>
      )}
    />
  );
};
