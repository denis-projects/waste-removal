/*
  # Create Quote Requests System

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer name
      - `email` (text, required) - Customer email
      - `phone` (text, required) - Customer phone
      - `address` (text, required) - Service location
      - `debris_type` (text, required) - Type of debris/materials
      - `estimated_volume` (text, required) - Estimated volume of debris
      - `project_type` (text, required) - Type of construction project
      - `preferred_date` (date) - Preferred service date
      - `additional_info` (text) - Additional notes
      - `created_at` (timestamp)
      - `status` (text, default 'pending') - Quote status

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for anonymous users to create quote requests
    - Add policy for authenticated admin users to read all requests
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  debris_type text NOT NULL,
  estimated_volume text NOT NULL,
  project_type text NOT NULL,
  preferred_date date,
  additional_info text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);