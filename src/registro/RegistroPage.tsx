import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    city: '',
    ocupation: '',
    enrollment: '',
    speciality: '',
    institution: '',
    terms: '',
  });

  const handleChange = (e:any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    await axios.post('/api/users', credentials);
    Router.push('/gracias');
  };

  return (
    <div className="p-5 mt-5 sm:mt-1  sm:h-full flex justify-center content-evenly ">
      <div className="mt-2 sm:mt-2">
        <div className=" md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-medium leading-6 text-[#0c4f8a]">
                Registro COINER<sup>®</sup> 2022,
              </h2>
              <h3 className="mt-1 text-sm text-gray-600">
                Reserva la Fecha <br /> nov 25, 26 y 27 de noviembre
              </h3>
            </div>
          </div>
          <div className="shadow-md mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-5 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombre<span className="text-gray-600">(s)</span>
                      </label>
                      <input
                        onChange={handleChange}
                        required
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Apellido<span className="text-gray-600">(s)</span>
                      </label>
                      <input
                        onChange={handleChange}
                        required
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Correo electrónico
                      </label>
                      <input
                        onChange={handleChange}
                        required
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contraseña
                      </label>
                      <input
                        onChange={handleChange}
                        required
                        minLength={8}
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                      <small> use al menos 8 caracteres </small>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        País
                      </label>

                      <select
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        id="country"
                        name="country"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border--[#0c4f8a] focus:outline-none focus:ring--[#0c4f8a] sm:text-sm"
                      >
                        <option value="default">Selecciona tu país</option>

                        <option value="Mexico">Mexico</option>
                        <option value="United States of America">
                          United States of America
                        </option>
                        <option value="Aaland Islands">Aaland Islands</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua And Barbuda">
                          Antigua And Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire, Saint Eustatius and Saba">
                          Bonaire, Saint Eustatius and Saba
                        </option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'Ivoire">Cote DIvoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curacao">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Democratic Republic of the Congo">
                          Democratic Republic of the Congo
                        </option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard and Mc Donald Islands">
                          Heard and Mc Donald Islands
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey  (Channel Islands)">
                          Jersey (Channel Islands)
                        </option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao Peoples Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Kosovo">
                          Republic of Kosovo
                        </option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa (Independent)">
                          Samoa (Independent)
                        </option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South Korea">South Korea</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="St. Helena">St. Helena</option>
                        <option value="St. Pierre and Miquelon">
                          St. Pierre and Miquelon
                        </option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen Islands">
                          Svalbard and Jan Mayen Islands
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks & Caicos Islands">
                          Turks &amp; Caicos Islands
                        </option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="USA Minor Outlying Islands">
                          USA Minor Outlying Islands
                        </option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State (Holy See)">
                          Vatican City State (Holy See)
                        </option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (British)">
                          Virgin Islands (British)
                        </option>
                        <option value="Virgin Islands (U.S.)">
                          Virgin Islands (U.S.)
                        </option>
                        <option value="Wallis and Futuna Islands">
                          Wallis and Futuna Islands
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>{' '}
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ciudad
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>{' '}
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="ocupation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ocupación
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        type="text"
                        name="ocupation"
                        id="ocupation"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="institution"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Institución
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        type="text"
                        name="institution"
                        id="institution"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label
                        htmlFor="speciality"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Especialidad
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        type="text"
                        name="speciality"
                        id="speciality"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="enrollment"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cedula o numero de matricula
                      </label>
                      <input
                        required
                        onChange={handleChange}
                        minLength={8}
                        type="text"
                        name="enrollment"
                        id="enrollment"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0c4f8a] focus:ring-[#0c4f8a] sm:text-sm"
                      />
                    </div>
                    <div className="flex content-center col-span-6 sm:col-span-3 lg:col-span-6">
                      <input
                        onChange={handleChange}
                        className="check mx-2"
                        type="checkbox"
                        name="terms"
                        id="terms"
                        required
                      />

                      <label
                        htmlFor="terms"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Acepto Términos y condiciones y el Aviso de Privacidad
                        <br />
                        <small className="text-[#1171c4]">
                          <Link href="/aviso">
                            <a>
                              {' '}
                              Leer Términos y condiciones y Aviso de Privacidad
                            </a>
                          </Link>
                        </small>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#0c4f8a] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0c4f8a] focus:outline-none focus:ring-2 focus:ring--[#0c4f8a] focus:ring-offset-2"
                  >
                    Registro
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
