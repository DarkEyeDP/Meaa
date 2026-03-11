import { useState } from "react";
import { Search, Loader2, ExternalLink } from "lucide-react";
import type { AddressFormValues } from "../../types/lawmakers";

const US_STATES: [string, string][] = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"],
  ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"],
  ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
  ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"],
  ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
  ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
  ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"],
  ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
  ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"],
  ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"],
  ["WI", "Wisconsin"], ["WY", "Wyoming"],
];

interface Props {
  onSubmit: (values: AddressFormValues) => void;
  isLoading: boolean;
}

type FormErrors = Partial<Record<keyof AddressFormValues, string>>;

export function AddressForm({ onSubmit, isLoading }: Props) {
  const [values, setValues] = useState<AddressFormValues>({
    street: "",
    city: "",
    state: "",
    zip: "",
    district: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!values.street.trim()) next.street = "Street address is required";
    if (!values.city.trim()) next.city = "City is required";
    if (!values.state) next.state = "State is required";
    if (!values.zip.trim()) next.zip = "ZIP code is required";
    else if (!/^\d{5}(-\d{4})?$/.test(values.zip.trim()))
      next.zip = "Enter a valid 5-digit ZIP code";
    if (values.district && !/^[\d\s,]+$/.test(values.district.trim()))
      next.district = "Enter district numbers separated by commas (e.g. 31 or 31, 10)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(values);
  };

  const set = (key: keyof AddressFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const inputCls = (key: keyof AddressFormValues) =>
    `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-colors bg-white ${
      errors[key] ? "border-red-400" : "border-gray-300 hover:border-gray-400"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Street */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            placeholder="123 Main Street"
            autoComplete="street-address"
            className={inputCls("street")}
            value={values.street}
            onChange={set("street")}
            disabled={isLoading}
          />
          {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            placeholder="Austin"
            autoComplete="address-level2"
            className={inputCls("city")}
            value={values.city}
            onChange={set("city")}
            disabled={isLoading}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <select
            className={inputCls("state")}
            value={values.state}
            onChange={set("state")}
            disabled={isLoading}
          >
            <option value="">Select a state</option>
            {US_STATES.map(([abbr, name]) => (
              <option key={abbr} value={abbr}>{name}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>

        {/* ZIP */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
          <input
            type="text"
            placeholder="78701"
            maxLength={10}
            autoComplete="postal-code"
            className={inputCls("zip")}
            value={values.zip}
            onChange={set("zip")}
            disabled={isLoading}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>

        {/* Congressional District */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Congressional District{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 31 or 31, 10"
            maxLength={20}
            className={inputCls("district")}
            value={values.district}
            onChange={set("district")}
            disabled={isLoading}
          />
          {errors.district ? (
            <p className="text-red-500 text-xs mt-1">{errors.district}</p>
          ) : (
            <p className="text-xs text-gray-500 mt-1">
              Not sure?{" "}
              <a
                href="https://www.house.gov/representatives/find-your-representative"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A227] hover:underline inline-flex items-center gap-0.5"
              >
                Find your district
                <ExternalLink size={11} />
              </a>
              {" "}· Multiple districts: <span className="font-mono">31, 10</span> · Leave blank for senators only.
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 bg-[#C9A227] text-[#0B1F3A] px-8 py-3 rounded-lg font-semibold hover:bg-[#b39020] transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Looking up officials…
          </>
        ) : (
          <>
            <Search size={18} />
            Find My Officials
          </>
        )}
      </button>
    </form>
  );
}
