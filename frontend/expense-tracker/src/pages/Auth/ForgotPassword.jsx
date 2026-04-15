import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosinstance'
import { API_PATHS } from '../../utils/apiPaths'
import { toast } from 'react-hot-toast'
import { LuArrowLeft, LuCheck, LuLock } from 'react-icons/lu'

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isPasswordReset, setIsPasswordReset] = useState(false)

  const navigate = useNavigate()

  // Handle Password Reset Form Submit
  const handlePasswordReset = async (e) => {
    e.preventDefault()

    // Validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!newPassword) {
      setError("Please enter a new password.")
      return
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setError("")
    setLoading(true)

    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.FORGOT_PASSWORD,
        {
          email,
          newPassword,
        }
      )

      if (response.status === 200) {
        setIsPasswordReset(true)
        toast.success("Password updated successfully!")
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message)
        toast.error(error.response.data.message)
      } else {
        setError("Something went wrong. Please try again.")
        toast.error("Something went wrong. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        {!isPasswordReset ? (
          <>
            <div className='flex items-center gap-2 mb-4'>
              <button
                onClick={() => navigate("/login")}
                className='flex items-center gap-1 text-primary hover:text-primary/80 transition'
              >
                <LuArrowLeft className='text-lg' />
                <span className='text-sm'>Back to Login</span>
              </button>
            </div>

            <h3 className='text-xl font-semibold text-black'>Forgot Password?</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
              Enter your email and set a new password to regain access to your account
            </p>

            <form onSubmit={handlePasswordReset}>
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="john@example.com"
                type="text"
              />

              <div className='mb-4'>
                <label className='text-sm font-medium text-gray-700 block mb-2'>
                  New Password
                </label>
                <div className='relative'>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={({ target }) => setNewPassword(target.value)}
                    placeholder="Min 6 characters"
                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                  />
                  <LuLock className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                </div>
              </div>

              <Input
                value={confirmPassword}
                onChange={({ target }) => setConfirmPassword(target.value)}
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
              />

              {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className='btn-primary w-full'
              >
                {loading ? "Resetting Password..." : "Reset Password"}
              </button>

              <p className='text-xs text-gray-600 mt-4'>
                Remembered your password? {" "}
                <Link className="font-medium text-primary underline" to="/login">
                  Back to Login
                </Link>
              </p>
            </form>
          </>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-green-50 text-green-600 rounded-full p-4 mb-4'>
              <LuCheck className='text-3xl' />
            </div>
            <h3 className='text-xl font-semibold text-black'>Password Reset Successfully</h3>
            <p className='text-xs text-slate-700 mt-2 mb-6 text-center'>
              Your password has been updated. You will be redirected to the login page shortly.
            </p>
            <Link to="/login" className='text-primary underline text-sm'>
              Or click here to log in now
            </Link>
          </div>
        )}
      </div>
    </AuthLayout>
  )
}

export default ForgotPassword
